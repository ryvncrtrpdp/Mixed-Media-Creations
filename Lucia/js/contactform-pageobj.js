import {Slider_PageOBJ} from './slider_pageobj.js';
import {GenericValidation, ValidateEmail, PhoneValidation} from './input-validations.js';

export class ContactForm_PageOBJ {
    constructor(){
        this.formCSSSelector = "#luciaContactForm [data-luciaContactFormEl='form']";
        this.formNameCSSSelector = "[data-luciaContactFormEl='name']";
        this.formEmailCSSSelector = "[data-luciaContactFormEl='email']";
        this.formPhoneCSSSelector = "[data-luciaContactFormEl='phone']";
        this.formSubmitCSSSelector = "[data-luciaContactFormEl='submitButton']";
        this.initSlider();
        this.initForm();
    }
    initSlider(){
        this.sliderPageOBJ = new Slider_PageOBJ('.swiper-container');
    }
    initForm(){

        $(this.formSubmitCSSSelector).on("click", function(){
            var name = GenericValidation($(this.formNameCSSSelector));
            var email = ValidateEmail($(this.formEmailCSSSelector));
            var phone = PhoneValidation($(this.formPhoneCSSSelector));
            if(name !== false && email !== false && phone !== false){
                this.clearForm();
                alert(name + ' - ' + email + ' - ' + phone);
            }
            console.log(name, email, phone);
        }.bind(this));
    }
    clearForm(){
        $(this.formNameCSSSelector).val('');
        $(this.formEmailCSSSelector).val('');
        $(this.formPhoneCSSSelector).val('');
    }

}