import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

import { MostrarTarefasComponent } from './mostrar-tarefas.component';
import { TarefasPendenteComponent } from './tarefas-pendente/tarefas-pendente.component';
import { BtnDeleteComponent } from './btn-delete/btn-delete.component';
import { TarefasConcluidoComponent } from './tarefas-concluido/tarefas-concluido.component';
import { CardListComponent } from './card-list/card-list.component';
import { DialogCreateNewTaskComponent, ModalAddTaskComponent } from './modal-add-task/modal-add-task.component';
import { FormTarefaComponent } from './form-tarefa/form-tarefa.component';
import { BtnComecarComponent } from './tarefas-pendente/btn-comecar/btn-comecar.component';
import { TarefaPendenteModule } from './tarefas-pendente/tarefas-pendente.module';
import { CountdownComponent } from './countdown/countdown.component';

@NgModule({
    declarations: [
        MostrarTarefasComponent, 
        BtnDeleteComponent, 
        TarefasConcluidoComponent, 
        CardListComponent, 
        ModalAddTaskComponent,
        DialogCreateNewTaskComponent,
        FormTarefaComponent,
        CountdownComponent,
    ],
    imports: [
        CommonModule,
        AngularMaterialModule,
        HttpClientModule,
        TarefaPendenteModule
    ],
    exports: [MostrarTarefasComponent,]
})
export class MostrarTarefasModule{}