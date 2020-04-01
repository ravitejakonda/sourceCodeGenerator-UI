import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'


@Component({
  selector: 'app-code-generation',
  templateUrl: './code-generation.component.html',
  styleUrls: ['./code-generation.component.less']
})
export class CodeGenerationComponent implements OnInit {
 inputTypes:any = ['text','password','email','date','number'];
 isDisabled:boolean;
 isMin:boolean;
 isMax:boolean;
 isPattern:boolean;
 isRequired:boolean;
inputSourceCodeForm: FormGroup
  constructor(private fb: FormBuilder ) { }

  ngOnInit(): void {
    
    this.inputSourceCodeForm = this.fb.group({
      label:['', Validators.required],
      for:['', Validators.required],
      selectInputType:['',Validators.required],
      nameAttr:[''],
      disabledCb:[false],
      requiredCb:[false],
      minCb:[false],
      maxCb:[false],
      patternCb:[false]
      
    })
  }

  onSubmit(){

  }

}
