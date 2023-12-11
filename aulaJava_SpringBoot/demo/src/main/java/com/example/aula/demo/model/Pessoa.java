package com.example.aula.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Pessoa {
    //Essa classe vai virar uma tabela la no banco de dados

    // Atributos
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String nome;
    private String telefone;
    private int id;


    // Construtor dos objetos, dentro dele setamos o set de cada atributo
    public Pessoa(String nome, String telefone, int id) {
        this.setId(id);
        this.setNome(nome);
        this.setTelefone(telefone);
        // Seta para inserir no objeto

    }

    public Pessoa() { //Construtor vazil porque 

    }

    public Pessoa(int id2, String nome2, String telefone2) {
    }




    // Metodos dos atributos
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

}
