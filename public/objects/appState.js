require('ui/modules').get('app/wazuh', [])
    .service('appState', function ($cookies) {
        return {
            getDashboardsState: function () {
                return { name: $cookies.getObject('_dashboardsState_name'), filter: $cookies.getObject('_dashboardsState_filter') };
            },
            setDashboardsState: function (name, filter) {
                if (name) {
                    $cookies.putObject('_dashboardsState_name', name);
                }
                if (filter) {
                    $cookies.putObject('_dashboardsState_filter', filter);
                }
            },
			getExtensions: function () {
                return { extensions: $cookies.getObject('extensions') };
            },
            setExtensions: function (extensions) {
                if (extensions) {
                    $cookies.putObject('extensions', extensions);
                }
            },
			unsetDashboardsState: function () {
                    $cookies.putObject('_dashboardsState_name', "");
                    $cookies.putObject('_dashboardsState_filter', "");
            },
			getDiscoverState: function () {
                return { name: $cookies.getObject('_discoverState_name'), filter: $cookies.getObject('_discoverState_filter') };
            },
            setDiscoverState: function (name, filter) {
                if (name) {
                    $cookies.putObject('_discoverState_name', name);
                }
                if (filter) {
                    $cookies.putObject('_discoverState_filter', filter);
                }
            },
			unsetDiscoverState: function () {
                    $cookies.putObject('_discoverState_name', "");
                    $cookies.putObject('_discoverState_filter', "");
            },
            getManagerState: function () {
                return $cookies.getObject('_managerState');
            },
            setManagerState: function (subtab) {
                if (subtab) {
                    $cookies.putObject('_managerState', subtab);
                }
            },
            getRulesetState: function () {
                return $cookies.getObject('_rulesetState');
            },
            setRulesetState: function (subtab) {
                if (subtab) {
                    $cookies.putObject('_rulesetState', subtab);
                }
            },
            getOverviewState: function () {
                return $cookies.getObject('_overviewState');
            },
            setOverviewState: function (subtab) {
                if (subtab) {
                    $cookies.putObject('_overviewState', subtab);
                }
            },
			getDefaultManager: function () {
				if($cookies.getObject('_defaultManager'))
					return { name: $cookies.getObject('_defaultManager')};
				else
					return { name: "*"};
				
            },
            setDefaultManager: function (name) {
                if (name) {
                    $cookies.putObject('_defaultManager', name);
                }
            },
			getDisState: function (tab) {
				if($cookies.getObject(tab))
					return { value: $cookies.getObject(tab)};
				else
					return { value: "*"};
				
            },
            setDisState: function (tab,value) {
                if (tab && value) {
                    $cookies.putObject(tab, value);
                }
            }
        };
    });