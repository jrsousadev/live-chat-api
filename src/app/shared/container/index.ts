import { container } from "tsyringe";
import { ChatModule } from "../../modules/chat-module";
import { MessageModule } from "../../modules/message-module";
import { UserModule } from "../../modules/user-module";

container.registerSingleton<UserModule>("UserModule", UserModule);
container.registerSingleton<ChatModule>("ChatModule", ChatModule);
container.registerSingleton<MessageModule>("MessageModule", MessageModule);
