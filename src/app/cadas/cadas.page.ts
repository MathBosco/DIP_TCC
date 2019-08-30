import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-cadas',
  templateUrl: './cadas.page.html',
  styleUrls: ['./cadas.page.scss'],
})

export class CadasPage implements OnInit {
 
 public formGrupo : FormGroup;
mensagem : string;
  
  constructor(private formConstrutor: FormBuilder , public toastController : ToastController) {}

  
  ngOnInit() {
    this.formGrupo = this.formConstrutor.group({

      Ra : [''] , 
      Nome : [''] , 
      Email : [''] , 
      EmailConfirm : [''] , 
      Senha : [''] , 
      SenhaConfirm : [''] , 

    });
  }
  private Cadastrar(){

    const RA = this.formGrupo.get('Ra').value;
    const Nome = this.formGrupo.get('Nome').value;
    const Email = this.formGrupo.get('Email').value;
    const EmailConfirm = this.formGrupo.get('EmailConfirm').value;
    const Senha = this.formGrupo.get('Senha').value;
    const SenhaConfirm = this.formGrupo.get('SenhaConfirm').value;

    this.mensagem = "Você Foi Cadastrado com Sucesso, "  + "\n Bem vindo ao DIP " + Nome + "!";
    this.toastDuracao();
  }

   async toastDuracao(){
      const toast = await this.toastController.create({

        message: this.mensagem,
        duration: 5000
      });

      toast.present();
    }
    
    

  }


