import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  //! Este el componente hijo

  @Input() label!: string;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes ->', changes);
  }

  ngOnInit(): void {
    console.log('OnInit');
  }

  ngOnDestroy(): void {
    console.log('OnDestroy');
  }
}
