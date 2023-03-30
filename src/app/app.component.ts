import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  useSymbols = true;
  useNumbers = true;
  useLetters = true
  passwordLength = 16


  onChangeSymbols() {
    this.useSymbols = !this.useSymbols
  }
  
  onChangeNumbers() {
    this.useNumbers = !this.useNumbers
  }
  
  onChangeLetters() {
    this.useLetters = !this.useLetters
  }

  onChangeLength(event: Event) {
    if (event === null || event.target === null) {
      return;
    }
    this.passwordLength = +(event.target as HTMLInputElement).value
  }
  onButtonDisabled() {
    if(this.passwordLength < 1) {
      return true
    }
    if(!this.useSymbols && !this.useLetters && !this.useNumbers) {
      return true
    }
    return false
  }

  onButtonClick() {
    const numbers = '1234567890'
    const letters = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
    const symbols = '!@#$%^&*()'

    let validChars = ''
    if (this.useLetters) {
      validChars += letters
    }
    if (this.useNumbers) {
      validChars += numbers
    }
    if (this.useSymbols) {
      validChars += symbols
    }

    let generatedPassword = ""
    for(let i = 0; i < this.passwordLength; i++) {
      const index = Math.floor(Math.random() * validChars.length)
      generatedPassword += validChars[index]
    }


    this.password = generatedPassword
  }

}
