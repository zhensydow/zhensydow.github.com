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
/** Configure Require.js
 * @author Luis Cabellos
 */
var require = {
    waitSeconds: 60,
    // Default load path for js files
    baseUrl: 'js/app',
    shim: {
        'THREE': { exports: 'THREE' },
        'detector': { exports: 'Detector' },
        'OBJLoader': { deps: ['THREE'] }
    },
    paths: {
        THREE: '../lib/three.min',
        detector: '../lib/Detector',
        OBJLoader: '../lib/OBJLoader',
        jquery: '../lib/jquery-1.11.1.min'
    }
};
