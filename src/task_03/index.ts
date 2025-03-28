import { Authenticator } from './Authenticator';
import { ExtendedAuthenticator } from './ExtendedAuthenticator';

function testSingleton() {
    console.log('===== ТЕСТУВАННЯ SINGLETON AUTHENTICATOR =====\n');
    
    console.log("Отримання першого екземпляра Authenticator:");
    const auth1 = Authenticator.getInstance();
    
    console.log("\nОтримання другого екземпляра Authenticator:");
    const auth2 = Authenticator.getInstance();
    
    console.log("\nПеревірка, чи auth1 та auth2 - один і той самий об'єкт:");
    console.log(`auth1 === auth2: ${auth1 === auth2}`);
    
    console.log("\nТест методу автентифікації:");
    const authResult = auth1.authenticate("admin", "password");
    console.log(`Результат автентифікації: ${authResult}`);
    
    console.log("\nСпроба створити екземпляр через ExtendedAuthenticator:");
    try {
        const extAuth = new ExtendedAuthenticator();
        console.log("Екземпляр створено (це не повинно статися)");
    } catch (error: any) {
        console.log(`Помилка: ${error.message}`);
    }
    
    console.log("\nОтримання екземпляру через getExtendedInstance:");
    try {
        const extAuth = ExtendedAuthenticator.getExtendedInstance();
        console.log("Екземпляр отримано");
        console.log(`extAuth === auth1: ${extAuth === auth1}`);
        
        const twoFactorResult = extAuth.twoFactorAuth("admin", "123456");
        console.log(`Результат двофакторної автентифікації: ${twoFactorResult}`);
    } catch (error: any) {
        console.log(`Помилка: ${error.message}`);
    }
    
    console.log("\n===== ТЕСТУВАННЯ ЗАВЕРШЕНО =====");
}

testSingleton();