import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationService } from 'primeng/api';
import { ExitGuard } from '../guards/exit/exit.guard';
import { Category_PlacesService } from '../services/category_places.service';
import { TicketsService } from '../services/tickets.service';
import { Rows_PlacesService } from '../services/rows_places.service';
import { UnitsService } from '../services/units.service';
import { SeasonsService } from '../services/seasons.service';
import { StagesService } from '../services/stages.service';
import { SeancesService } from '../services/seances.service';
import { PerformancesService } from '../services/performances.service';
import { PositionsService } from '../services/positions.service';
import { EmployeesService } from '../services/employees.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    EmployeesService, 
    PositionsService, 
    PerformancesService, 
    SeancesService,
    StagesService,
    SeasonsService,
    UnitsService,
    Rows_PlacesService,
    TicketsService,
    Category_PlacesService,
    ExitGuard,
    ConfirmationService
  ],
  declarations: []
})
export class CoreModule { }
