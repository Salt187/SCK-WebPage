/**
 * 音频工具类：封装无界面提示音播放，自动处理组件卸载停止
 */
class AudioUtil {
    constructor() {
        this.audioInstance = null; // 存储当前 Audio 实例
        this.supportedFormats = ['mp3', 'wav', 'ogg']; // 支持的音频格式
    }

    /**
     * 检查音频格式是否支持
     * @param {string} url - 音频文件路径
     * @returns {boolean} 是否支持
     */
    _checkFormat(url) {
        const format = url.split('.').pop().toLowerCase();
        return this.supportedFormats.includes(format);
    }

    /**
     * 播放音频
     * @param {string} url - 音频路径（public 目录下的相对路径，如 'success.mp3'）
     * @param {Object} options - 播放配置
     * @param {number} options.volume - 音量（0-1，默认 0.5）
     * @param {boolean} options.loop - 是否循环（默认 false）
     * @returns {Promise<void>} - 播放结果
     */
    playAudio(url, { volume = 0.5, loop = false } = {}) {
        // 1. 校验参数
        if (!url) throw new Error('音频路径不能为空');
        if (!this._checkFormat(url)) {
            console.warn(`不支持的音频格式，当前支持：${this.supportedFormats.join(',')}`);
            return Promise.reject('格式不支持');
        }

        // 2. 停止之前的播放（避免多实例同时播放）
        this.stopAudio();

        // 3. 创建 Audio 实例（拼接 public 路径）
        this.audioInstance = new Audio(url);
        this.audioInstance.volume = volume;
        this.audioInstance.loop = loop;

        // 4. 播放并返回 Promise
        return this.audioInstance.play()
            .then(() => {
                console.log(`音频播放成功：${url}`);
            })
            .catch((err) => {
                console.error(`音频播放失败：${err.message}`, '路径：', url);
                this.stopAudio(); // 播放失败时销毁实例
                return Promise.reject(err);
            });
    }

    /**
     * 停止当前音频播放
     */
    stopAudio() {
        if (this.audioInstance) {
            this.audioInstance.pause(); // 暂停
            this.audioInstance.currentTime = 0; // 重置进度条
            this.audioInstance = null; // 销毁实例
            console.log('音频已停止');
        }
    }

    /**
     * 组件卸载时调用：强制停止所有音频（关键！解决回退页面不停止问题）
     */
    onUnmounted() {
        this.stopAudio();
    }
}

// 导出单例实例（全局唯一，避免重复创建）
export const audioUtil = new AudioUtil();