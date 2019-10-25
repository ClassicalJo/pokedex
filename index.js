fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(function (response) {
        response.json().then(function (json) {
            const pokemones = json.results
            for (let i = 0; i < pokemones.length; i++) {
                const pokemon = pokemones[i]

                const $ol = document.querySelector("#pokemones")
                const $li = document.createElement("li")
                const $a = document.createElement("a")

                $a.textContent = pokemon.name

                $a.href = "#"
                $a.setAttribute("data-url", pokemon.url)
                $li.appendChild($a)
                $ol.appendChild($li)

                $a.onclick = function () {
                    const url = this.getAttribute("data-url")
                    fetch(url).then(function (response) {
                        response.json().then(function (json) {
                            dataPokemon = json
                            let $h2 = document.querySelector("h2")
                            $h2.textContent = dataPokemon.name

                            let $datos = document.querySelector("#datos")

                            if ($datos.hasChildNodes() == true) {
                                $datos.innerHTML = ""
                            }
                                //////////////////////////////////////////////////    
                                let $divImagenes = document.createElement("div")
                                
                                let $frontDefault = document.createElement("img")
                                $frontDefault.src = dataPokemon.sprites.front_default

                                let $frontShiny = document.createElement("img")
                                $frontShiny.src = dataPokemon.sprites.front_shiny

                                $divImagenes.appendChild($frontDefault)
                                $divImagenes.appendChild($frontShiny)
                                $datos.appendChild($divImagenes)

                                let $listaEspecificaciones = document.createElement("ul")
                                
                                let mostrarFrontDefault = 1
                                $frontDefault.onclick = function(){
                                    mostrarFrontDefault < 0 ? $frontDefault.src = dataPokemon.sprites.back_default : $frontDefault.src = dataPokemon.sprites.front_default
                                    mostrarFrontDefault = mostrarFrontDefault * -1
                                }

                                let mostrarFrontShiny = 1
                                $frontShiny.onclick = function(){
                                    mostrarFrontShiny < 0 ? $frontShiny.src = dataPokemon.sprites.back_shiny : $frontShiny.src = dataPokemon.sprites.front_shiny
                                    mostrarFrontShiny = mostrarFrontShiny * -1
                                }
                                //////////////////////////////////////////////////
                                let $altura = document.createElement('li')
                                $altura.textContent = `Altura: ${dataPokemon.height}`
                                $listaEspecificaciones.appendChild($altura)
                                //////////////////////////////////////////////////
                                let $tipos = document.createElement("li")

                                let $tiposDesplegable = document.createElement("a")
                                $tiposDesplegable.href = "#"
                                $tiposDesplegable.textContent = "Tipos"

                                let $listaTipos = document.createElement("ul")
                                $tiposDesplegable.appendChild($listaTipos)

                                $tipos.appendChild($tiposDesplegable)
                                $listaEspecificaciones.appendChild($tipos)

                                $tipos.onclick = function() {
                                    let tipos = dataPokemon.types
                                    $listaTipos.innerHTML = ""

                                    for(let i = 0; i < tipos.length; i++){
                                        $tipo = document.createElement('li')
                                        $tipoA = document.createElement("a")
                                        $tipoA.innerText = `Tipo ${i+1}: ${tipos[i].type.name}`
                                        $tipo.appendChild($tipoA)
                                        $listaTipos.appendChild($tipo)
                                    }
                                }
                                //////////////////////////////////////////////////
                                let $habilidades = document.createElement("li")

                                let $habilidadesDesplegable = document.createElement("a")
                                $habilidadesDesplegable.href = "#"
                                $habilidadesDesplegable.textContent = "Habilidades"

                                let $listaHabilidades = document.createElement("ul")
                                $habilidadesDesplegable.appendChild($listaHabilidades)

                                $habilidades.appendChild($habilidadesDesplegable)
                                $listaEspecificaciones.appendChild($habilidades)

                                $habilidadesDesplegable.onclick = function(){
                                    let habilidades = dataPokemon.abilities
                                    $listaHabilidades.innerHTML = ""

                                    for(let i = 0; i < habilidades.length; i++){
                                        $habilidad = document.createElement("li")
                                        $habilidadA = document.createElement("a")
                                        $habilidadA.innerText = habilidades[i].ability.name
                                        $habilidad.appendChild($habilidadA)
                                        $listaHabilidades.appendChild($habilidad)
                                    }
                                    
                                }
                                //////////////////////////////////////////////////    
                                let $movimientos = document.createElement("li")

                                let $movimientosDesplegable = document.createElement("a")
                                $movimientosDesplegable.href = "#"
                                $movimientosDesplegable.textContent = "Movimientos"


                                let $listaMovimientos = document.createElement('ul')
                                $movimientosDesplegable.appendChild($listaMovimientos)
                                
                                $movimientos.appendChild($movimientosDesplegable)
                                $listaEspecificaciones.appendChild($movimientos)
                                

                                $movimientosDesplegable.onclick = function(){
                                    let movimientos = dataPokemon.moves
                                    $listaMovimientos.innerHTML = ""

                                    for(i = 0; i < movimientos.length; i++){
                                        $movimiento = document.createElement("li")
                                        $movimientoA = document.createElement("a")
                                        $movimientoA.innerText = movimientos[i].move.name
                                        $movimiento.appendChild($movimientoA)
                                        $listaMovimientos.appendChild($movimiento)
                                    }
                                    
                                }
                                

                                $datos.appendChild($listaEspecificaciones)
                                //////////////////////////////////////////////////    
                                let $id = document.createElement("h3")
                                $id.innerText = `ID: ${dataPokemon.id}`
                                $datos.appendChild($id)
                                //////////////////////////////////////////////////    

                                
                        })
                    })
                }
            }
        });
    });
    