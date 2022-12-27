import { AbstractControl,ValidationErrors,ValidatorFn } from "@angular/forms";
export function nameValidator():ValidatorFn {
  return(control:AbstractControl):ValidationErrors | null => {
    const value = control.value
    const trimmed  = value.trim();
    if(trimmed === ''){
      return {error:{value:'you will have to name your stuff something'}}
    }else if(trimmed.length < 3){
      return {error:{value:'it will be easier to remember what this stuff is if you at least give it three letter name'}}
    }
    return null
  }
}
