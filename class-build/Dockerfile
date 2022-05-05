
FROM node:14
# RUN mkdir class-build 굳이 따로 만들필요없음
WORKDIR /class-build/
COPY . /class-build/


# 미리해놓고 저장해놓는 명령어들


RUN yarn install
RUN yarn build:ssr

# yarn start 는 들어가선 안됨!! 24시간 실행하는건 CMD 에 들어가야함!!
CMD yarn start 
# CMD 는 미리 저장안됨 CMD 는 마지막에 한번밖에 못씀!! 한페이지당 한번만!

# 명령어에는 CMD 또는 RUN 이있다. 단, CMD는 한번밖에 못씀 !! RUN은 우리마음대로 쓸수있다.