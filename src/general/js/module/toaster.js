/**
 * 
 */

export const createToaster=(titre,texte,position,couleur)=>{
	let toaster=$("<div>");
	let toasterH=$("<div>");
	let toasterB=$("<div>");
	toaster.addClass("toaster");
	toaster.addClass(position);
	toasterH.addClass("toasterHigh");
	toasterH.addClass(couleur);
	toasterB.addClass("toasterBottom");
	toasterH.text(titre);
	toasterB.text(texte);
	toaster.append(toasterH);
	toaster.append(toasterB);
	$('body').append(toaster);
	toaster.on("click",()=>{
		toaster.remove();
	});
}

