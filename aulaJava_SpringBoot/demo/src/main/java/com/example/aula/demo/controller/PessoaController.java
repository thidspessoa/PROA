package com.example.aula.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//Conexão entre nossa classe Pessoa e os requerimentos do HTMl
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.example.aula.demo.model.Pessoa;
import com.example.aula.demo.repositorio.Repositorio;

@Controller
public class PessoaController { //Faz a ligação do front com o back
    // Faremos as rotas para poder acessar o url
    // Comunicação entre o BD, Pessoa e o HTML
    // Por isso utilizamos a classe Controler, que é do spring, e é responsavel por
    // fazer essa conexão

    @GetMapping("/create") // O que tem aqui entre parenteses, tem que ser igual ao que tem no action do html //Get é quando quero exibir algo no html, get eu mostro
    public String mostrarHTML() {
        // Metodo que toda vez que eu colocar /create no url ele retorne o create.html
        // Esse metodo chama o HTML, por isso nome em return tem que ser igual ao
        // arquivo
        return "create"; // Retorna o arquivo HTML
    };

    //Para irmos colocando os objetos da classe pessoa criada no html
    List <Pessoa> listaPessoas = new ArrayList<>();
    //Cria um novo array 

    @Autowired
    private Repositorio acaoDaRepositorio;

    //cada url so consegue ter um post

    @PostMapping("/create")
    public String cadastrar (@RequestParam String Nome , @RequestParam String Telefone){
        //RequestParam é para pegar os parametros la do formulário 
        
        Pessoa pessoa = new Pessoa();
        pessoa.setNome(Nome);
        pessoa.setTelefone(Telefone);

         //Chamando metodo save da classe Repositorio do spring
        acaoDaRepositorio.save(pessoa); //Passa o objeto pessoa para o BD
        System.out.println("Salvo");
        return "redirect:/list";

    }


    // @PostMapping("/create")
    // public String pegarInformacoesHTML(Pessoa pessoa) { // Cria um objeto no parametro
    //     System.out.println("Meu telefone é: " + pessoa.getTelefone());
    //     System.out.println("Meu nome é: " + pessoa.getNome());
    //     // Metodo post metodo, o que tiver na url vai trazer para ca, para poder
    //     // manipular
    //     // Post para quando quero trazer algo do HTML para o meu codigo(classe) para poder manipular

    //     // Pega os dados do HTML e tras para a classe para poder manipular.
  
    //     //     //apenas para ir colocando o id automatico de acordo com o tamanho da lista
    //     int id = listaPessoas.size() +1;
    //     // Ele acrescenta o id de acordo com o tamanho da list +1
  
    //     //     //adicionando no array pessoas os objetos pessoa
    //     listaPessoas.add(new Pessoa(id, pessoa.getNome(), pessoa.getTelefone()));
    //     // Adiciona em listaPessoas, o objeto pessoa, com as informações de cada input recuperado
  
    //     //     //ao clicar em salvar vai redirecionar para html list
    //     return "redirect:/list";
    //     //Html que lista todas as pessoas q eu cadastrei
    // };

    @GetMapping("/list")
    public ModelAndView listarPessoas(){ //Retorna uma vizualização, listando pessoas
    //     //metodo do spring modelAndView para retornar a visualizaçao que sera exibida
    //     //nosso caso iremos adicionar a lista pessoas
        ModelAndView mv = new ModelAndView("list");
    //     //adicionando no modelAndView as pessoas que estao na lista pessoas
        mv.addObject("listaPessoas",listaPessoas);
        return mv;
    }; //ModelAndView retorna uma vizualização no HTML



    // Pessoa pessoa = new Pessoa();
    // Primeiro pessoa é a classe, segundo é o nome do objeto

    // pessoa.setName(nome);
    // pessoa.setTelefone(telefone);

    // RequestBod:

}
