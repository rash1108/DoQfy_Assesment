import { Component } from '@angular/core';
import pendingActionData from './pendingActionData'; 

interface PendingAction {  
  id: String;  
  filePending: Number;  
  daysAgo: Number;  

}  

@Component({
  selector: 'app-pending-action',
  templateUrl: './pending-action.component.html',
  styleUrls: ['./pending-action.component.css']
})
export class PendingActionComponent {
  pendingActionData: PendingAction[] = pendingActionData;
}
