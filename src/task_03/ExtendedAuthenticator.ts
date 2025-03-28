import { Authenticator } from './Authenticator';

// Розширений аутентифікатор для демонстрації наслідування
export class ExtendedAuthenticator extends Authenticator {
    // Конструктор виконає конструктор батьківського класу
    constructor() {
        super();
    }
    
    // Додатковий метод для демонстрації функціональності
    public twoFactorAuth(username: string, code: string): boolean {
        console.log(`Перевірка двофакторної автентифікації для ${username}`);
        return code === "123456";
    }
    
    // Статичний метод для спроби отримання екземпляру розширеного класу
    public static getExtendedInstance(): ExtendedAuthenticator {
        // Тут ми можемо отримати лише той самий екземпляр, що й Authenticator.getInstance()
        return Authenticator.getInstance() as ExtendedAuthenticator;
    }
}