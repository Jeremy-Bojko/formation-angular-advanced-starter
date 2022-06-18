import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {
  @Input() public init!: Client;
  @Output() submitted = new EventEmitter<Client>();
  public form!: FormGroup;
  public states = StateClient;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [this.init.name, [Validators.required, Validators.minLength(2)]],
      state: [this.init.state],
      tva: [this.init.tva, Validators.required],
      id: [this.init.id],
      totalCaHt: [this.init.totalCaHt],
      comment: [this.init.comment]
    })

  }

  public onSubmit(): void {
    const client = this.form.value as Client;
    this.submitted.emit(client);
  }

}
