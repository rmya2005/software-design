export class Authenticator {
    // Приватне статичне поле для зберігання єдиного екземпляру
    private static instance: Authenticator | null = null;
    
    // Приватний конструктор, щоб запобігти створенню через new
    protected constructor() {
        // Перевірка, щоб гарантувати, що ніякий підклас не створить новий екземпляр
        if (Authenticator.instance !== null) {
            throw new Error("Екземпляр Authenticator вже існує! Використовуйте getInstance()");
        }
        console.log("Створено екземпляр Authenticator");
    }
    
    // Публічний метод для отримання єдиного екземпляру
    public static getInstance(): Authenticator {
        if (Authenticator.instance === null) {
            Authenticator.instance = new Authenticator();
        }
        return Authenticator.instance;
    }
    
    // Метод для автентифікації користувача
    public authenticate(username: string, password: string): boolean {
        // Проста демонстраційна логіка
        console.log(`Спроба автентифікації користувача: ${username}`);
        return username === "admin" && password === "password";
    }
    
    // Метод для виходу з системи
    public logout(username: string): void {
        console.log(`Користувач ${username} вийшов із системи`);
    }
}