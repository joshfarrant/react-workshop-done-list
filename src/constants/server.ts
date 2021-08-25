export const URL = {
    DOMAIN: 'localhost',
    PORT: {
        HTTP: 5050,
        WS: 5051,
    },
    get WEB(): string {
        return `http://${this.DOMAIN}:${this.PORT.HTTP}`;
    },
    get WS(): string {
        return `ws://${this.DOMAIN}:${this.PORT.WS}`;
    },
};
