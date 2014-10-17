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
/** Application definition
 * @author Luis Cabellos
 */
define( ["THREE", "renderer", "camera", "scene", "OBJLoader" ], function( THREE, renderer, camera, scene ){
    var app = {
        clock: null,
        manager: null,
        loader: null,
        meshes: {},
        activeMeshes: {},
        blankMaterial: null,
        materials: {},
        rotation: 0.0,

        init: function(){
            app.clock = new THREE.Clock();

            app.manager = new THREE.LoadingManager();
            app.manager.onProgress = function ( item, loaded, total ) {
                console.log( item, loaded, total );
            };

            var ambient = new THREE.AmbientLight( 0x303030 );
            scene.add( ambient );

            var directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
            directionalLight.position.set( 0, 1, 1 ).normalize();
            scene.add( directionalLight );

            app.blankMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});

            app.materials['mat01'] = new THREE.MeshLambertMaterial({
                color: 0x0f00ff });
            app.materials['mat02'] = new THREE.MeshLambertMaterial({
                color: 0xff000f, shading: THREE.SmoothShading});
            app.materials['mat03'] = new THREE.MeshPhongMaterial({
                color: 0x040404, specular: 0x666666, emissive: 0x0f0000,
                ambient: 0x0f0f0f, shininess: 10, shading: THREE.SmoothShading
            });
            app.materials['mat04'] = new THREE.MeshNormalMaterial({});

            app.loader = new THREE.OBJLoader( app.manager );
        },

        animate: function(){
            var center = new THREE.Vector3( 0, 2, 0 );
            window.requestAnimationFrame( app.animate );

            var elapsedTime = app.clock.getElapsedTime();

            var radius = 10;

            camera.position.z = radius * Math.sin( app.rotation );
            camera.position.x = radius * Math.cos( app.rotation );
            camera.lookAt( center );

            renderer.render( scene, camera );
        },

        loadMesh: function( name, filename, callback ){
            app.loader.load( filename, function ( object ) {
                object.traverse( function ( child ) {
                    if ( child instanceof THREE.Mesh ) {
                        child.material = app.blankMaterial;
                    }
                });

                app.meshes[name] = object;
                if( callback ){
                    callback();
                }
            });
        },

        showMesh: function( tag, name ){
            app.hideMesh( tag );

            var object = app.meshes[name];
            if( object ){
                scene.add( object );
                app.activeMeshes[tag] = object;
            }
        },

        hideMesh: function( tag ){
            var old = app.activeMeshes[tag];
            if( old ){
                scene.remove( old );
                app.activeMeshes[tag] = null;
            }
        },

        changeMaterial: function( tag, name ){
            var object = app.activeMeshes[tag];
            var material = app.materials[name];
            if( object && material ){
                object.traverse( function ( child ) {
                    if ( child instanceof THREE.Mesh ) {
                        child.material = material;
                    }
                });
            }
        },

        rotateLeft: function(){
            app.rotation += Math.PI * 15.0 / 180.0;
        },

        rotateRigth: function(){
            app.rotation -= Math.PI * 15.0 / 180.0;
        }
    };

    return app;
});
