import { Component } from '@angular/core';
import { MemberService } from '@app/services/member.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private memberService: MemberService) {}

  getFoundValidCPF() {
    return this.memberService.foundValidCPF$.getValue()
  }

}
