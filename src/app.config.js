function config( $stateProvider, $urlRouterProvider ) {
    $urlRouterProvider.otherwise( "/" );

    $stateProvider
        .state( 'home-view',
            {
                url: '/'
                , component: 'homeComponent'
                , resolve:
                    {
                        slideNum ( $stateParams ) {
                            if ( $stateParams.slideNum ) {
                                return $stateParams.slideNum;
                            }
                            return 0;
                        }
                    }
            }
        )
        .state( 'project-view',
            {
                url: '/project/:name'
                , component: 'projectComponent'
                , resolve:
                    {
                       name ( $stateParams ) {
                          return $stateParams.name;
                       }
                    }
            }
        )

}

export default config;
