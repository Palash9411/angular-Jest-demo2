export const base_template = `
<div [formGroup]='fg' [ngClass]="[layout]" >
  <ng-container *ngFor="let ctrl of getControls(); let i=index">
   
    <div 
      [ngClass]="['field' , 'item-' + i]"
      *ngIf="ctrl.e.showWhen ? ctrl.e.showWhen(): true" >

      <!-- *** COMMON LABEL GENERATOR *** -->
        <label class='label-caption'>{{ctrl.e.caption}}</label>
      
      <!-- *** HANDLE READONLY FORM SCENARIOS *** -->
        <ng-container *ngIf="isReadOnly">
          <label >{{ctrl.e.type === 'Date' ?   (ctrl.value | date) : ctrl.value}}</label>
        </ng-container>

      <!-- HANDLES EDITABLE SCENARIO -->
        <ng-container     
          *ngIf = "!isReadOnly"
          [ngSwitch]="ctrl.e.type">

        <!-- HANDLES INJECTED TEMPLATE SCENARIO -->
          <ng-container *ngSwitchCase="'Injected'">
            <ng-container
              *ngIf = "getProjectedTemplateAtPosition(i) as projected"
              [ngTemplateOutlet]="projected.template"
              [ngTemplateOutletContext]="{ctrl}">
            </ng-container>
          </ng-container>

        <!-- HANDLES CONFIGURED CONTROL GENERATION -->
          <input 
            type="text" 
            *ngSwitchCase="'TextBox'"
            [readonly]="ctrl.e.readonlyWhen && ctrl.e.readonlyWhen()"
            [formControl]="ctrl">

          <p-dropdown 
            [options]="ctrl.e.options | async" 
            *ngSwitchCase="'DropDown'" 
            [formControl]="ctrl" 
            [placeholder]="getValue(ctrl.e.caption) + ' ?'" >
          </p-dropdown>
        
          <p-calendar 
            inputId="basic" 
            *ngSwitchCase="'Date'" 
            [formControl]="ctrl"></p-calendar>
        </ng-container>
    </div>

  </ng-container>

</div> 

`;
