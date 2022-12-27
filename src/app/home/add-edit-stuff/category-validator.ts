import { AbstractControl,ValidationErrors,ValidatorFn, Validators } from "@angular/forms";

export function categoryValidator():ValidatorFn {
  return(control:AbstractControl):ValidationErrors | null => {
    const category = control.get('category')
    if(category.value === 'perishable'){
      const expirationDate  = control.get('expirationDate').addValidators(Validators.required)
      return null
    }
    return null
  }
}


