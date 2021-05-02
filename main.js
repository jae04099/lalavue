Vue.component('dice', {
    template: `
    <div><slot></slot></div>
    `,
    props: {
        diceNum: this.diceNum
    }
})

new Vue({
    el: '#root',
    data: {
        diceNum: 1
    }
})


// 그냥 컴포넌트 버튼에 click showmodal false를 선언할 수 없습니다. 스코프 때문이죠. showmodal이 컴포넌트 스코프에는 없습니다. 모달 컴포넌트는 컴포넌트 자체 스코프를 갖습니다.
// 그래서 우리가 하고자 하는거는, 루트 인스턴스에 버튼을 클릭했을 때 is-active 모달이 바뀌었다는 것을 알려 줄 것입니다. 그렇게 되면 루트 인스턴스는 '모달을 닫았구나? 그렇다면 내가 showModal 프로퍼티를 업데이트 해줄게' 와 같은 의무를 갖게 됩니다. 이것이 컴포넌트 사이의 소통입니다.