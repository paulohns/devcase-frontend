import { Component, OnInit } from '@angular/core';
import { VendaService } from '../shared/venda/venda.service';

@Component({
  selector: 'app-venda-list',
  templateUrl: './venda-list.component.html',
  styleUrls: ['./venda-list.component.css']
})
export class VendaListComponent implements OnInit {
  vendas: Array<any>;

  constructor(private carService: VendaService) { }

  ngOnInit() {
    this.carService.getAll().subscribe(data => {
      this.vendas = data;
    });
  }



}
