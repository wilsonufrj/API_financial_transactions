/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package br.projeto.mywallet.repository;

import br.projeto.mywallet.Model.Wallet;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author wilson
 */
public interface WalletRepository extends JpaRepository<Wallet, Long>{
    
}