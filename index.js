import { franc } from "franc";
import langs from "langs";
import colors from 'colors'
const input = process.argv[2];
let langCode = franc(input)
if(langCode ==='und'){
    console.log("Coudn't figure it out ! Check the input & try again ".red)
}else{
    let language = langs.where("3",langCode)
    if(language){

    console.log(`Detected Language = ${language.name.green}`);
 }else{
    console.log("Sorry! Coudn't find a language code ".red)
 }

}
