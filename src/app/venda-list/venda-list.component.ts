import { Component, OnInit } from '@angular/core';
import { VendaService } from '../shared/venda/venda.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-venda-list',
  templateUrl: './venda-list.component.html',
  styleUrls: ['./venda-list.component.css']
})
export class VendaListComponent implements OnInit {
  dataInicial :  any = "";
  dataFinal :  any = "";
  vendas: Array<any>;

  constructor(private vendaService: VendaService, private router: Router) { }

  ngOnInit() {
    this.vendaService.getAll().subscribe(data => {
      this.vendas = data;
    });
  }

  filtrar() {
    this.vendaService.getFiltroData(this.dataInicial, this.dataFinal).subscribe(result => {
      console.log(result);
      this.vendas = result;
      this.gotoList();
    }, error => console.error(error));
  }

  gotoList() {
    this.router.navigate(['/venda-list']);
  }



}
