import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/index'
import index from '@/components/index/index'
import signIn from '@/components/register/signIn'
import register from '@/components/register/register'
import classification from '@/components/classification/classification'
import fic from '@/components/classification/fic'
import shoppingCart from '@/components/shoppingCart/shoppingCart'
import mine from '@/components/mine/mine'
import search from '@/components/search/search'
import search_result from '@/components/search/search_result'


import details from '@/components/details/details'
import whole from '@/components/mine/whole'
import deliveryAddress from '@/components/delivery-address/delivery-address'
import addContacts from '@/components/delivery-address/add-contacts'


Vue.use(Router)

export default new Router({
	linkActiveClass:"bg",
  	routes: [
    {
      path: '/home',
      name: 'home',
      component: home,
      children:[
      	{
      		path: 'index',
		    name: 'index',
		    component: index
      	},
        {
          path:"classification",
          redirect:"classification/fic/0"
        },
      	{
      		path: 'classification',
  		    name: 'classification',
  		    component: classification,
  		    children:[
		    	{
		    		path: 'fic/:id',
				    name: 'fic',
				    component: fic,
		    	}
		    ]
      	},
      	{
      		path: 'shoppingCart',
		    name: 'shoppingCart',
		    component: shoppingCart
      	},
      	{
      		path: 'mine',
		    name: 'mine',
		    component: mine
      	},
      	{
      		path: 'search',
		    name: 'search',
		    component: search
      	}
      ]
    },{
    	path:"/",
    	redirect:"/home/index"
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: signIn
    },
    {
      path: '/search_result',
      name: 'search_result',
      component: search_result
    },
    {
      path: '/details/:id',
      name: 'details',
      component: details
    },
    {
      path: '/whole',
      name: 'whole',
      component: whole
    },
    {
      path: '/deliveryAddress',
      name: 'deliveryAddress',
      component: deliveryAddress
    },
    {
      path: '/addContacts',
      name: 'addContacts',
      component: addContacts
    }
  ]
})
