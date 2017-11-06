export function getMeta() {
	return {
		name: 'root',
		component: 'Layout',
		className: 'whatsmk',
		children: [{
			name: 'title',
			component: '::h1',
			className: 'whatsmk-title',
			children: 'WhatsMK'
		},{
			name: 'desc',
			component: '::span',
			className: 'whatsmk-desc',
			children: '基于react、redux、ant-deisgn的快速开发框架'
		},{
			name: 'link',
			component: 'Layout',
			className: 'whatsmk-link',
			children: [{
				name: 'docs',
				component: '::a',
				children: 'Docs',
				onClick: '{{$gotoDocs}}'
			},'•',{
				name: 'demo',
				component: '::a',
				children: 'Demo',
				onClick: '{{$gotoDemo}}'
			}]
		}]
	}
}

export function getInitState() {
	return {
		data: {
		}
	}
}