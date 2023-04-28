import React,{Fragment} from "react";
import {Image,Text} from "react-native";
import Style from "./styles";

const imagem = Math.floor(Math.random() * 4 +1);

export default function bannerMovies(){

     return(
             <> 
             <Text style = {Style.textBanner}>Em cartaz</Text>   
             <Image style = {Style.ImageBanner} source = {require(`../../../Img/${imagem}.jpg`)} />

             </>


     );
}