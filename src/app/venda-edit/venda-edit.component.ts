import { Component, OnDestroy, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { VendaService } from '../shared/venda/venda.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-venda-edit',
  templateUrl: './venda-edit.component.html',
  styleUrls: ['./venda-edit.component.css']
})
export class VendaEditComponent implements OnInit {
  
  myControl = new FormControl();

  venda: any = {};

  clientes: any = {};

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private vendaService: VendaService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.vendaService.get(id).subscribe((venda: any) => {
          if (venda) {
            this.venda = venda;
            this.venda.href = venda._links.self.href;
          } else {
            console.log(`Venda with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });

    this.clientes = this.vendaService.getAllClientes();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/venda-list']);
  }

  save(form: NgForm) {
    this.vendaService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  remove(href) {
    this.vendaService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

}
