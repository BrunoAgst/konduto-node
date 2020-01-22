module.exports = class Device{
    constructor(user_id, fingerprint, platform, browser, language, timezone, cookie, javascript, flash){
        this.user_id = user_id;
        this.fingerprint = fingerprint;
        this.platform = platform;
        this.browser = browser;
        this.language = language;
        this.timezone = timezone;
        this.cookie = cookie;
        this.javascript = javascript;
        this.flash = flash;
    }
}

