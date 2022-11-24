import { container } from "tsyringe";
import { ChatModule } from "../../modules/Chat/ChatModule";
import { MessageModule } from "../../modules/Message/MessageModule";
import { UserModule } from "../../modules/User/UserModule";

container.registerSingleton<UserModule>("UserModule", UserModule);

container.registerSingleton<ChatModule>("ChatModule", ChatModule);

container.registerSingleton<MessageModule>("MessageModule", MessageModule);
