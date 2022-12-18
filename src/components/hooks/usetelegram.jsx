const tg = window.Telegram.WebApp;

export function useTelegram() {

    const onClose = () => {
        tg.close()
    }
    const onToggleButton = () => {
        if(tg.MainButton.isVisible) {
            th.MainButton.hide();
        }
        else{
            th.MainButton.show();
        }
    }
    return {
        onClose,
        tg,
        onToggleButton,
        user: tg.initDataUnsafe?.user?.username,
    }
}