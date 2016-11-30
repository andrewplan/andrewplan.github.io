import angular from "angular";
import homeComponent from './home/homeComponent.js';
import projectComponent from './project/projectComponent.js';

angular
    .module( 'components', [] )
    .component( 'homeComponent', homeComponent )
    .component( 'projectComponent', projectComponent )
