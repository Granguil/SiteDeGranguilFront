/**
 * 
 */
import * as $ from 'jquery';
import style from './../css/toaster.module.css';

export const createToaster=(titre,texte,position,couleur)=>{
	let toaster=$("<div>");
	let toasterH=$("<div>");
	let toasterB=$("<div>");
	toaster.addClass(style.toaster);
	toaster.addClass(style[position]);
	toasterH.addClass(style.toasterHigh);
	toasterH.addClass(style[couleur]);
	toasterB.addClass(style.toasterBottom);
	toasterH.text(titre);
	toasterB.text(texte);
	toaster.append(toasterH);
	toaster.append(toasterB);
	$('body').append(toaster);
	toaster.on("click",()=>{
		toaster.remove();
	});
}

