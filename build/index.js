"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = Number(process.env.PORT) || 8000;
app.get('/', (req, res) => {
    res.json({
        message: 'Hello, World!'
    });
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// son ab hum apne apoosesever ko banar rhe ai jo ke express e chalu jrge apne sever ko and it will make the server of th apolo mand /gr[ahql vali apake apllolp mejayege ]
// uyaha apr hum exprerss ke serve rpar apna grpahqlk ka direct kar deneg kajh bhi aapkoi koi bhib re q ayeg euspar 
// exprrsss app ko listn kavana haot hai app.listen(port par listen karn hai an dcallbaclk me pass kar do ke jab hiaapka chaleag sevrit willl give th execut th  ducntion )
// so ab hum aone exoress ka servr baan aleneg and it will rin on th epost
