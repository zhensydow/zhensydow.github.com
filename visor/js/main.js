/*
 *   Copyright 2014 Concano Games
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */
/** Main
 * @author Luis Cabellos
 */
require( ['detector', 'container', 'app', 'jquery'], function ( Detector, container, app, $ ){
    if( ! Detector.webgl && false ){
        Detector.addGetWebGLMessage();
        container.innerHTML = "";
    }

    app.init();
    app.animate();

    $( ".rotate-left" ).click( app.rotateLeft );
    $( ".rotate-rigth" ).click( app.rotateRigth );

    var showMeshClick = function(obj){
        var mesh = obj.target.getAttribute('mesh-name');
        var tag = obj.target.getAttribute('mesh-tag');
        app.showMesh( tag, mesh );
    };

    // load meshes and setup buttons after the load
    app.loadMesh( 'z01', 'assets/zapato01.obj', function(){
        $(".mesh-show[mesh-name='z01']").click( showMeshClick );
    });

    app.loadMesh( 'z02', 'assets/zapato02.obj', function(){
        $(".mesh-show[mesh-name='z02']").click( showMeshClick );
    });

    // clear mesh button
    $( ".mesh-clear" ).click( function(){
        app.hideMesh( 'body' );
    });

    // buttons to change materials
    $( ".mesh-chmat" ).click( function(obj){
        var mat = obj.target.getAttribute('mesh-mat');
        var tag = obj.target.getAttribute('mesh-tag');
        app.changeMaterial( tag, mat );
    });

});
