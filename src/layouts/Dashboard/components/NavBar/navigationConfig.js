/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import BarChartIcon from '@material-ui/icons/BarChart';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import ErrorIcon from '@material-ui/icons/ErrorOutline';
import LockOpenIcon from '@material-ui/icons/LockOpenOutlined';
import PersonIcon from '@material-ui/icons/PersonOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import ReceiptIcon from '@material-ui/icons/Receipt';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import BorderClearIcon from '@material-ui/icons/BorderClear';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import WifiTetheringRoundedIcon from '@material-ui/icons/WifiTetheringRounded';

export default [
  {
    title: 'Pages',
    pages: [
      {
        title: 'Dashboard',
        href: '/dashboard',
        icon: DashboardIcon
      },
      {
        title: 'Management',
        href: '/management',
        icon: BarChartIcon,
        children: [
          {
            title: 'Single Users',
            href: '/management/customers',
            icon: AccountCircleIcon,
            children: [
              {
                title: 'All single users',
                href: '/management/orders' //single-users/all
              },
              {
                title: 'New Single user',
                href: '/management/orders/1' //single-users/new
              }
            ]
          },
          {
            title: 'Groups',
            href: '/management/customers',
            icon: GroupRoundedIcon,
            children: [
              {
                title: 'All groups',
                href: '/management/customers' //groups/all
              },
              {
                title: 'New group',
                href: '/management/orders' //groups/new
              }
            ]
          },
          {
            title: 'Hotspot',
            href: '/management/customers',
            icon: WifiTetheringRoundedIcon,
            children: [
              {
                title: 'All Hotspots',
                href: '/management/orders' //single-users/all
              },
              {
                title: 'New Hotspot',
                href: '/management/customers/1/summary' //single-users/new
              }
            ]
          }
          // {
          //   title: 'Customer Details',
          //   href: '/management/customers/1/summary'
          // },
          // {
          //   title: 'Orders',
          //   href: '/management/orders'
          // },
          // {
          //   title: 'Order Details',
          //   href: '/management/orders/1'
          // }
        ]
      },
      {
        title: 'Profile',
        href: '/settings/general',
        icon: PersonIcon
      },
      {
        title: 'Accounting',
        href: '/accounting',
        icon: AccountBalanceIcon,
        children: [
          {
            title: 'Plan Information',
            href: '/errors/error-401'
          },
          {
            title: 'Subsciption Analysis',
            href: '/errors/error-401'
          }
        ]
      },
      {
        title: 'Settings',
        href: '/settings',
        icon: SettingsIcon,
        children: [
          {
            title: 'General',
            href: '/settings/general'
          },
          {
            title: 'Subscription',
            href: '/settings/subscription'
          }
        ]
      },
      {
        title: 'Reports',
        href: '/reports',
        icon: AssessmentIcon,
        children: [
          {
            title: 'General',
            href: '/general',
            icon: AllInclusiveIcon,
            children: [
              {
                title: 'Online users',
                href: '/general/online-users'
              },
              {
                title: 'Top Users',
                href: '/general/top-users'
              },
              {
                title: 'History',
                href: '/general/history'
              }
            ]
          },
          {
            title: 'Logs',
            href: '/logs',
            icon: DeveloperModeIcon,
            children: [
              {
                title: 'Radius Log',
                href: '/logs/radius-log'
              },
              {
                title: 'System Log',
                href: '/logs/system-log'
              },
              {
                title: 'Boof Log',
                href: '/logs/boof-log'
              }
            ]
          },
          {
            title: 'Status',
            href: '/status',
            icon: AllInclusiveIcon,
            children: [
              {
                title: 'Server status',
                href: '/status/server-status'
              },
              {
                title: 'Services status',
                href: '/status/services-status'
              }
            ]
          }
        ]
      },
      {
        title: 'Billing Services',
        href: '/billing-services',
        icon: ReceiptIcon,
        children: [
          {
            title: 'Rates',
            href: '/rates',
            icon: SignalCellularAltIcon,
            children: [
              {
                title: 'All rates',
                href: '/rates/all'
              },
              {
                title: 'New rate',
                href: '/rates/new'
              }
            ]
          },
          {
            title: 'Plans',
            href: '/plans',
            icon: BorderClearIcon,
            children: [
              {
                title: 'All plans',
                href: '/plans/all'
              },
              {
                title: 'New plan',
                href: '/plans/new'
              }
            ]
          }
        ]
      },
      {
        title: 'Authentication',
        href: '/auth',
        icon: LockOpenIcon,
        children: [
          {
            title: 'Login',
            href: '/auth/login'
          },
          {
            title: 'Register',
            href: '/auth/register'
          }
        ]
      },
      {
        title: 'Errors',
        href: '/errors',
        icon: ErrorIcon,
        children: [
          {
            title: 'Error 401',
            href: '/errors/error-401'
          },
          {
            title: 'Error 404',
            href: '/errors/error-404'
          },
          {
            title: 'Error 500',
            href: '/errors/error-500'
          }
        ]
      }
    ]
  }
];
