import React from 'react';
import './styled.css';

import logo from '../../../public/images/logo.png';
export default () => {

    const isLogged = false;


    return (
        <header className="_t he tr">
            <div className="ctn br">
                <div class="ar ar-logo">
                    <a href="javascript:;" class="bt-hamb"><i class="fas fa-bars"></i></a>
                    <a href="{{ url('/') }}" class="logo">
                        <img src={logo} alt="Logo OCiclista" />
                    </a>
                </div>
                <div class="ar ar-user">
                    {isLogged
                        ?
                            <form class="user-entry user-active" id="fuser" style={{display: 'inline-block'}} action="{{ route('logout') }}" method="POST">
                                @csrf
                                <i class="fas fa-user-circle"></i>
                                <span class="mt-1 dinline-block user-name">
                                    Olá, <strong>FIRST_NAME</strong>
                                </span>

                                <ul class="l-reset user-itens">
                                    <li><a href="{{ route('cliente.account') }}">Minha Conta</a></li>
                                    <li><a href="{{ route('cliente.order') }}">Meus Pedidos</a></li>
                                    <li><a href="javascript:;" onclick="document.getElementById('fuser').submit()">Sair</a></li>
                                </ul>

                            </form>
                        :
                            <a href="{{ route('login') }}" class="user-entry" title="Entre ou cadastre-se">
                                <i class="fas fa-user-circle"></i>
                                <span>Entre ou cadastre-se</span>
                            </a>
                    }
                </div>
                <div class="ar ar-cart">
                    <a href="{{ route('cliente.account') }}#favoritos" class="heart-view"><i class="fas fa-heart"></i></a>
                    <div class="cx-cart">
                        <a href="javascript:;" class="cart-view" data-qtd="0"><i class="fas fa-shopping-cart"></i></a>
                        <div class="cart-flut flx-column flx-align-center flx-justify-center">

                            {/* @if ($listCart)
                                <ul class="cart-itens-list l-reset">
                                    @php $valor = 0; @endphp
                                    @foreach ($listCart as $item)
                                        @php
                                            $valor += ($item->preco * $item->quantity);
                                        @endphp
                                        <li class="cart-item l-reset">
                                            <div class="cart-item-img vI" style="background-image: url({{ $item->img }})">
                                                <img src="{{ $item->img }}" alt="">
                                            </div>
                                            <div class="cart-item-desc">
                                                <p>{{ $item->title }}</p>
                                                <div class="ct--item">
                                                    <span>Qtd: <span class="qtdItensCartP">{{ $item->quantity }}</span></span>
                                                <span>R$ {{ number_format($item->preco, 2, ',', '.') }}</span>
                                                </div>
                                            </div>
                                        </li>
                                    @endforeach
                                </ul>
                                <div class="cart-checkout">
                                    <p>Subtotal (sem frete): <span>R$ {{ number_format($valor, 2, ',', '.') }}</span></p>
                                    <a href="{{ route('cart.index') }}" class="ct-btn see-cart">ver carrinho</a>
                                    <a href="{{ route('checkout') }}" class="ct-btn finish-cart">Finalizar compra</a>
                                </div>
                            @else */}
                                <span>Seu carrinho está vazio</span>
                            {/* @endif */}
                        </div>
                    </div>
                </div>
                <div class="ar ar-search">
                    <ul class="l-intera l-reset flx">
                        <li><a href="{{ route('atendimento') }}" class="atend-cliente" title="Atendimento" onclick="event.preventDefault()">Atendimento</a></li>
                        <li><a href="{{ route('quem-somos') }}" title="Quem somos">Quem somos</a></li>
                        <li><a href="{{ route('politica-de-privacidade') }}" title="Política de privacidade">Politica de privacidade</a></li>
                    </ul>
                    <form class="f-search flx" action="{{ route('busca.index') }}" method="GET">
                        <div class="selectx">
                            <span class="text-catselect">Todos</span>
                            <select name="c" id="select-cat">
                                <option value="">Todos</option>
                                <option value="acessorios">Acessórios</option>
                                <option value="bicicletas">Bicicletas</option>
                                <option value="calcados">Calçados</option>
                                <option value="kids">kids</option>
                                <option value="kits">kits</option>
                                <option value="manutencao">Manutenção</option>
                                <option value="mulheres">Mulheres</option>
                                <option value="pecas">Peças</option>
                                <option value="protecao-e-seguranca">Proteção e segurança</option>
                                <option value="quadros">Quadros</option>
                                <option value="treinamentos">Treinametos</option>
                                <option value="vestuario">Vestuário</option>
                            </select>
                        </div>
                        <input type="text" name="s" id="campo-busca" placeholder="O que você deseja encontrar?" required />
                        <button type="submit" class="txt-replacement">buscar</button>
                        <ul class="popup-cat-selectx">
                            <li data-ref="all" style={{color: '#2196F3'}}>Todos</li>
                            <li data-ref="acessorios">Acessórios</li>
                            <li data-ref="bicicletas">Bicicletas</li>
                            <li data-ref="calcados">Calçados</li>
                            <li data-ref="kids">kids</li>
                            <li data-ref="kits">kits</li>
                            <li data-ref="manutencao">Manutenção</li>
                            <li data-ref="mulheres">Mulheres</li>
                            <li data-ref="pecas">Peças</li>
                            <li data-ref="protecao-e-seguranca">Proteção e segurança</li>
                            <li data-ref="quadros">Quadros</li>
                            <li data-ref="treinamentos">Treinametos</li>
                            <li data-ref="vestuario">Vestuário</li>
                        </ul>
                    </form>
                </div>
            </div>
        </header>
    );
};