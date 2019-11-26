FROM ubuntu:16.04 
LABEL maintainer="LIMXTEC developer"

COPY ./bin /usr/local/bin
COPY ./VERSION /tmp
COPY ./CHECKSUM /tmp
COPY ./bitcored /tmp

RUN chmod a+x /usr/local/bin/* && \
    apt-get update
RUN apt-get install -y --no-install-recommends wget ca-certificates tar software-properties-common
RUN add-apt-repository ppa:bitcoin/bitcoin && \
    apt-get update && \
    apt-get install -y libdb4.8-dev libdb4.8++-dev
RUN apt-get install -y libminiupnpc-dev libevent-dev libzmq5-dev libevent-pthreads-2.0-5
RUN VERSION=`cat /tmp/VERSION` && \
    #wget https://github.com/dalijolijo/BitCore/releases/download/${VERSION}/bitcore-${VERSION}-x86_64-linux-gnu_no-wallet.tar.gz -O /tmp/prebuilt.tar.gz && \
    #echo "$(cat /tmp/CHECKSUM)  /tmp/prebuilt.tar.gz" | sha256sum -c && \
    #tar xzf /tmp/prebuilt.tar.gz -C /tmp/ && \
    chmod a+x /tmp/bitcored && \
    mv /tmp/bitcored /usr/local/bin && \
    apt-get -y autoremove && \
    apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

VOLUME ["/data"]
ENV HOME /data
ENV DATA /data
WORKDIR /data

EXPOSE 8555 8556 

ENTRYPOINT ["init"]
