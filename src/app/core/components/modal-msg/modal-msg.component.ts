import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Modal } from 'bootstrap';
import { Subject, Subscription } from 'rxjs';
import { ModalService } from '../../services/modal.service';
// npm i --save-dev @types/bootstrap pour pouvoir utiliser les class de bootstrap

@Component({
  selector: 'app-modal-msg',
  templateUrl: './modal-msg.component.html',
  styleUrls: ['./modal-msg.component.scss']
})
export class ModalMsgComponent implements OnInit, AfterViewInit {
  public contentModal!: {title: string, content: string};
  @ViewChild('modalAlert') modalAlert!: ElementRef;
  public subModal!: Subscription;
  private modalManipulation!: Modal;

  constructor(private modalService: ModalService) { 
    this.subModal = this.modalService.subModal$.subscribe((modalParam) => {
      this.show();
      this.contentModal = {...modalParam};
    });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.modalManipulation = new Modal(this.modalAlert.nativeElement);
  }

  public show() {
    this.modalManipulation.show();
    setTimeout(() => {this.closeModal()}, 3000);
  }
  
  public closeModal() {
    this.modalManipulation.hide()
  }

  ngOnDestroy(): void {
    this.subModal.unsubscribe();
  }





}
