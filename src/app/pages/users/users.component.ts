  import { SelectionModel } from '@angular/cdk/collections'; 
  import { Component } from '@angular/core';
  import { MatTableDataSource, MatTableModule } from '@angular/material/table';
  import { MatCheckboxModule } from '@angular/material/checkbox';
  import { FormsModule } from '@angular/forms';
  import { MatInputModule } from '@angular/material/input';
  import { MatSelectModule } from '@angular/material/select';
  import { MatFormFieldModule } from '@angular/material/form-field';
  import { CommonModule } from '@angular/common';

  // Definição da interface PeriodicElement
export interface PeriodicElement {
  nome: string;
  email: string;
  telefone: string;
  dataContratacao: string;
}

// Definição da interface Options
export interface Options {
  value: string;
  viewValue: string;
}

  // Dados de exemplo
  const ELEMENT_DATA: PeriodicElement[] = [
    { nome: 'Hydrogen', email: 'hydrogen@example.com', telefone: 'H', dataContratacao: '01/02/2024' },
    { nome: 'Helium', email: 'helium@example.com', telefone: 'He', dataContratacao: '01/02/2024' },
    { nome: 'Lithium', email: 'lithium@example.com', telefone: 'Li', dataContratacao: '01/02/2024' },
    { nome: 'Beryllium', email: 'beryllium@example.com', telefone: 'Be', dataContratacao: '01/02/2024' },
    { nome: 'Boron', email: 'boron@example.com', telefone: 'B', dataContratacao: '01/02/2024' },
    { nome: 'Carbon', email: 'carbon@example.com', telefone: 'C', dataContratacao: '01/02/2024' },
    { nome: 'Nitrogen', email: 'nitrogen@example.com', telefone: 'N', dataContratacao: '01/02/2024' },
    { nome: 'Oxygen', email: 'oxygen@example.com', telefone: 'O', dataContratacao: '01/02/2024' },
    { nome: 'Fluorine', email: 'fluorine@example.com', telefone: 'F', dataContratacao: '01/02/2024' },
    { nome: 'Neon', email: 'neon@example.com', telefone: 'Ne', dataContratacao: '01/02/2024' },
  ];

  
  @Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css'],
    standalone: true,
    imports: [
      CommonModule, // Adicione esta linha
      MatTableModule,
      MatCheckboxModule,
      MatFormFieldModule,
      MatSelectModule,
      MatInputModule,
      FormsModule,
    ],
  })

  export class UsersComponent {
    displayedColumns: string[] = ['select', 'nome', 'email', 'telefone', 'dataContratacao'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    selection = new SelectionModel<PeriodicElement>(true, []);
  
    // Dados para o seletor
    options: Options[] = [
      { value: 'coordenador', viewValue: 'Coordenador' },
      { value: 'professor', viewValue: 'Professor' },
      { value: 'aluno', viewValue: 'Aluno' },
    ];
    filteredOptions: Options[] = this.options.slice(); // Inicializa com todas as opções
  
    // Função para filtrar opções
    filterOptions(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
      this.filteredOptions = this.options.filter(option => 
        option.viewValue.toLowerCase().includes(filterValue)
      );
    }
  
    // Métodos para seleção
    isAllSelected() {
      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource.data.length;
      return numSelected === numRows;
    }
  
    toggleAllRows() {
      if (this.isAllSelected()) {
        this.selection.clear();
        return;
      }
      this.selection.select(...this.dataSource.data);
    }
  
    checkboxLabel(row?: PeriodicElement): string {
      if (!row) {
        return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
      }
      return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.nome}`;
    }
  }