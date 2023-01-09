# Project specific

react18

i18n

cra

rest api (axios)

react query

recharts library

styled-components

localstorage

mobx

## Available Scripts

In the project directory, you can run:

### `npm start`

cra로 프로젝트를 구성했습니다. npm start를 이용하여 프로젝트를 시작해주세요.

axios를 mockApi로 감싸서 사용하였습니다. matchDetail 데이터를 여러개 보여주기 위해 key값을 같게 하여 react key 에러가 발생합니다. 실제 api를 이용하여 data를 불러온다면 발생하지 않을 에러입니다.

react suspense와 ErrorBounding 컴포넌트를 사용하여 data를 확실히 불러오는 환경을 만들어 작업을 진행하였습니다. loading, error처리는 해당 컴포넌트의 밖에서 해주기 때문에 각 컴포넌트 별로 각자 역할만 신경쓰게 하는 것을 목표로 하였습니다.

많은 시간을 투자하여 로딩페이지와 스켈레톤 페이지는 따로 구현하지 않았습니다. 양해 부탁드립니다.
