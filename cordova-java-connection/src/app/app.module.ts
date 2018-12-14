'use strict';

import angular from 'angular';
import 'angular-aria';
import 'angular-animate';
import 'angular-ui-router';
import 'angular-material';
import 'angular-material-icons';

import { NgModule, ModuleDecorated } from 'angular-ts-decorators';
import { ModuleHelper } from '../core/module.helper';
import { AppComponent } from './app.component';


@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    imports: [
        'ui.router',
        'ngMaterial',
        'ngMdIcons'
    ]
})
export class AppModule implements ModuleDecorated {

    public config($mdThemingProvider: angular.material.IThemingProvider): void {
        'ngInject';
        const $log: angular.ILogService = ModuleHelper.getLogger();
        $log.debug(`${AppModule.name}::config`);
        $mdThemingProvider.definePalette('black', {
            '50': '000000',
            '100': '000000',
            '200': '000000',
            '300': '000000',
            '400': '000000',
            '500': '000000',
            '600': '000000',
            '700': '000000',
            '800': '000000',
            '900': '000000',
            'A100': '000000',
            'A200': '000000',
            'A400': '000000',
            'A700': '000000',
            'contrastDefaultColor': 'light'
        });
        $mdThemingProvider.definePalette('white', {
            '50': 'ffffff',
            '100': 'ffffff',
            '200': 'ffffff',
            '300': 'ffffff',
            '400': 'ffffff',
            '500': 'ffffff',
            '600': 'ffffff',
            '700': 'ffffff',
            '800': 'ffffff',
            '900': 'ffffff',
            'A100': 'ffffff',
            'A200': 'ffffff',
            'A400': 'ffffff',
            'A700': 'ffffff',
            'contrastDefaultColor': 'dark'
        });
        $mdThemingProvider.theme('default')
            .primaryPalette('black')
            .accentPalette('grey');
    }

    public run(): void {
        const $log: angular.ILogService = ModuleHelper.getLogger();
        $log.debug(`${AppModule.name}::run`);
    }
}