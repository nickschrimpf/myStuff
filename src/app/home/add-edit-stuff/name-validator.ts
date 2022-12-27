import { AbstractControl,ValidationErrors,ValidatorFn } from "@angular/forms";
export function nameValidator():ValidatorFn {
  return(control:AbstractControl):ValidationErrors | null => {
    const value = control.value
    const trimmed  = value.trim();
    if(trimmed === ''){
      return {error:{value:'you will have to name your stuff something'}}
    }
    return null
  }
}
