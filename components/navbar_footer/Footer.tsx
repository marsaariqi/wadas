import Link from 'next/link'

const Footer = () => {
    return (
        <>
            <footer className="footer bg-[#132229] text-white p-10 gap-60 justify-center">
                <aside>
                    <svg width="150" height="80" viewBox="0 0 242 103" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <rect width="242" height="103" fill="url(#pattern0_989_1416)" />
                        <rect width="242" height="103" fill="url(#pattern1_989_1416)" />
                        <defs>
                            <pattern id="pattern0_989_1416" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlinkHref="#image0_989_1416" transform="matrix(0.00333333 0 0 0.00783172 0 -0.00122977)" />
                            </pattern>
                            <pattern id="pattern1_989_1416" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlinkHref="#image0_989_1416" transform="matrix(0.00333333 0 0 0.00783172 0 -0.00122977)" />
                            </pattern>
                            <image id="image0_989_1416" width="300" height="128" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACACAYAAACx1FRUAAAWnklEQVR4Ae1di7XENA6lBErYErYESqCDpQQ6gA6gg90OoAPoADqADighmztIwXFkS/4kk7x355w5+UxiS1fytWQ7mS++4IcIEAEiQASIABEgAkSACBABIkAEiAARIAJEgAgQASJABIgAESACRIAIEAEiQASIABEgAkSACBABIkAEiAARIAJEgAgQASJABIgAESACRIAIEAEiQASIABEgAkSACBABIkAEPgYCy7J8uSzL18uyfLssy3+XZflpWZZfki/OfS/X/OtjaE0tiAAReAwCy7J8tRLVj8uy/LG0f3APSOyrxyhMQYkAEXgeAsuyfCORUztN2XeAvL55HhKUmAgQgdsiIBFVTzRl09TxLInrttanYETgIQgsy/KvyRHVkar2Z0BcHOd6iH9QTCJwGwQuiKr2VPXP0V9ME2/jBhSECNwfAZnx+4dC3rP33f2RooREgAi8FYGVm757Dz+ZtZK03uoNrJwI3BiBm0RWOXORtG7sMxSNCLwFgWVZ/p0zxY2OuWbrLV7BSonADRGQ2cAzly2Mch8G4jl7eEPfoUhE4HIEVjL43yijXHD/T5cDwwqJABG4FwKyev0CvplSBVPDe7kPpSEC1yLQ+TygxT6/ykPOeHwHzxriqw9F47cZn1+uRYe1EQEicBsEJkVXeJDZHV+ScbIZqSejrNt4EAUhAhciMBhdYZC+mTyEuEYG+BllXegjrIoI3AKBwWUMQ8/8yTu0fhvIEb+8BYgUgggQgWsQkPdZ9XDGEFmpdkJavZHWt1oOt0SACHwCBJZl6Y1w3PGqKHwyMN9Dmj9H6+B1RIAIPBwBGUfqIYr/zla98/U1f7XKIY8d4VXNxW9LmbVykG5Hy5KZ1KJMUo/bSYhNvXL09+4IVYYStJzWLV6jjdljV58ofqXrHPukcndjUakbrw3Xt/LideF5JoGF0AgY8DpxzKqfjkdJ1kecl0bSQ1jTgR2IsppkCRJjiGgCMv8YdYRgpOuO2TXO+KLBuGVaOjTWU/MxNOLQDLMlR+1ch383Tx5Z9cswB14eAHxbP6dgYcn5uHPS+7QC+utZinYauMnJgg92h3rbAH5/RLASB/fsEMI9SHxpXSFdcz0mElYqy9TGukYsrctnvs/1bD1eo6j/dPpxigP2+bB/Dv7aUPAHEq2fYaPmcujxmmb83CoMGo7eH9kGySGU8gajNTcCDERqgMUlFkkHWyHsWh5yEmGp7FMaawdxNA8xpD63Cj/7lUwhP0xl+ND7nQTx9VmgdBJoE2FB9gDRuJFRkPiiRIOxFO/jpqnB6NGqpzktPJmwIONQY+1IBxWXpohd28J682yyUnl+0Do+/TbQcBW0dNtl0AjYgRQrlUP3myO+YD3VyKihQbgzmQE7uAQKfDvSQcXQjd5y+11AWJCtm7Q6O2PUGR53VEw6I1vFPrI9rc2pDo/YBhqKBeZp4AWJJJepp7Fh5sb7VCO3hvERN80IpC5uw5VZO0+n0u/NaeFFhAV5e+yL2bnej2uvvHE3+MLvci2GYjC+Fn22ttk+uYyPOJa0BdOlAAhTp5iRSadWe2Yxqg15BJjOXrFLngBJVHvaxmimSPLB8avi/Yq32Li3keK+prQwQFhojOgY8i8ehIc/ovFGP9VoVzHQbUA2r14X76SuCDmizZllrsSFf6RC2/Q+TRiofLffwvFkLAPrPs74NPd4UdAaSUB1Mx3BqzPQwItpmDiZ1h/ZFtPWwLhTqMfPOiJLJq9zarJrgBQiUSHILO1ALblxrinCCHR8Xp3Vzir1rYkdjtdeuzrmVNZb7UsjQs/lOWbJKaLnm5wnClIHCai87mC0JUPQ0cyoI9BYVTbdFjELNK7IGJj3Wms0UETatU9RxgJ+XnkuYaFc6WAjT1uE7Bz0I0/2UCch8ntlLRZ++bmAfYqdXl7WrY/F4GfNUJQc3GzII0Ctjta6ZgayhR0rl01w88jdnBENkEyOG+oxMQt0MG7PGsAO65sQeXv6htOOQAMLERbsIiTjyRZqsAG5XuvZ1uv+zI2UHYci90B9KNa0feqTYp88fU6Pw7ZJy73VvkQJXnib2WHKYch5omAFHdYSPLSYsiRHYNLBTA2CaUwu76EBrMTnRUYow3XUgDyvugP6hu0aaKhhwoJ9AhMuv5XsmJ4P6PjqAFaCQDZS+4TkD+CAOkJlpXp8uP0Vhaujqty4bkOKgh6IEPK69bhp3CWXJzB+dEiTgiSj8qXbA/kFnN1tpIHUdhuLC9R30DfHTI8DZTU1Uum0Urys/WqkEizj5bcB3IpRsWKAbbBO6KJp+bR2k8px6/1lWX6wrHnxORig6kAREFeZR4g3NK5RkiPgbAendUiuNnB6IJ+1fi8NdiOeQBkbcUja4bnJIRK08JtNWKgjkLJW7R2QaReRB+qLYlGzu4U3xuyQpmP8q6qThf2jzomiFgjvOAfgu3uMVeARstoihxEDrk7TNJbhpBwYc6iVtyP4wKyo22AC6eBuHM6RHz7kkqSQizfYvBFl1D4BPKrjeQHddhF5IC0MRZyBaM1rm+gYX29siGL1iOsGG7gHWu/viLR2jcIDUyKbyNqTmkxV5/Vk0N8DTps7eUmmF4E65W0yCwalsnDeJeRAQzlMSjgRYqheYBeIZnoIy4s4d7ZQG4o8WM/kfXadawQ/RKVpPaX9wBicJ5v+jvaEjnwna6ne254XJVSpO24R4lYjAhn/gTG8GSFPP7cxRw0ZcNptWYFz7auBRq6BbIFHe9wGvzq118A32RUPNEAPXM+OIv8ZEZanTzH6CxDoISUXPTxf3DoZxbC0nUhaMFFzIFCS6/Lzgd444IOXXQIHQE6PWRg81IstyAwGmPUJO1HEWA6BblGK6FLSYYsyK+VFy0IdW3klHQKYmjgFUqfDBEEuQ4AgXMI1yhwhLG8tl6mTY1PYIZQWqi7SVqOP3JR8KT0/5c0VKt8l24Bjpgp+9P1p0ZUaLxCpvAZGa2MsWha2TnmvUD9AGtVUJBChwQ/MMgJp4UasqV7p/kmE5b1eyEwJgx26ObjtRMTAEB2wiWOKR74v2QQIeEZH7XZeef1vOw4410cnqFy/6bl9oPHhlb61VGqXejlk4pUFfXezWZbzOaRYLSPYwL30/oyU0JttMxtuoI0UOzmxq5cWmkRp2cU6J+QFu4OQewisizQtWU49J47Vo2DeyKEwUjPMYm0NXoyFc/htRj15vbOPi2MYI4YQHGqyIqXFQ7ulzy71kvJKjQBOC8xrn115lm6VtFPL1alzyG59S/Lp/WYKpbIESL4nJfRkKkVJnu+iXAsDPefd35QWKkalrbRrEL6XAqstsB0izZIsU88Heo5UIWsfhnKdX4UWJ/SMZ9VzxbmfVM4ztk6KBkxqzrV1AipbpTzYxHth36E8LRfbAFnMsEc1LQzI0ERYARI3n8mT6GWGvl4ZzWlharPSvpCX5w+QbSppluQZOj8Y9WDgrxlkiQ4Qcd3pg2ihWZcW8Ac6BzN9GyjPnM1KdZHU4gr7FNPCEwir1iFA1xLOV/nqIcIRstQozdqaKWxqS91f/dvTo9qBaDlv2zopiOes/xsVPBAFeDLM+v10sgJW0tP1yHxwZCmvNuZVq8dLxXrLrdVZ+q0oy0zCCmJvZgqDnXpJb+v8IcIJRHfhKLM3whxt59Pud1IQC1A95/bQUSEraY3Wdfa2K0qM6pdftzbC2ir1kq7muArK7sSvGNVImd5gd0nOnvPFXn0WYQlZRYYhDmlygDB6dK7ds4vyJRupXY/0f3dP7nN6HAlQ9Npbbjt7DgB0MGyvguJMKPMdn1MG2GtYBMLyHIfi7BPq6YhSiwShcl+YDqquJoGOEpY09ugiYjNSGejUVbfW7SGaDnRyboYgWHikPS0QUV+ath3oOaY38o5G3OoE+fUwnNlIpgFcKCgSlmfCmg1Jiz+hvMjjJxhLQRQW/XodkqljgLDQUDGYnH8hn7d8IYUZ/mB2woFO/fV8XgMWkLn2sdJCb+wJ5UEH2GOnhxAVZow9skIZph3U1966jYSHBVR3gMxQoqPRFURzT6PhTCfcFgzEgbwGnCriEmtg+UFanjlOozoESAJlNflAoEMCHoe0JihLqlvvvjlwHfRL817FM98GJ0p2+AblSHUHniCoCEml9zXpkut26nFHKgHFdosXZwq4OmfP2E4Kdm0f41SvxZQzZe4tqyHlctM3yBAghBSbXWPIdQhEJtUUNS9P5PPWhEG+AzFfRFjFDiyQDobsk2IiHVZqD2v/IFOjja0yvXPNdk31On0/YAxLwUN+PUvQTnksGXEOPQxICqlCccB6luyt5TQ0xFAH0dADm9P2Kj8ipxKgyfnirJ6WY20DUaCVCp09+H8ghlT2QIQSsk9aJvYDnYKFBWZuWyOmxGzVXbSXakeW63D5cQA0S8NDLzhL8M4eJB9LwUrxewP/t8NGlw1U0zfFXnptOJ33qXY4QSLt6gAC9oX8u7QwKI+ns/U7Gn7Vl4OdQMg+aifdBtPCg3zSocwmLeDeZVPV55LtDQkrshI3d75qD3kJkJ2VBPEPk2+wvKpjBsroTht6COAEwkLjhJ/tiNEy4UoO3iJT+KJbTqHsSCRb9O3O4Zy87eAYWUjYxyxdTjsHcIWhARb+mKBlFkWVPbD+LIFX+SIzISqHbrt6uFkyj5QTcLpq+pbXHei1q2QjvqG4lrbds0jif14UuEuFJhEWxkbhW02+G0i/muxj2MtrfxF7Qa/WiAs2ABk34ZHLP/VYnEP//RbAeI5SctD8/GkE0TAQncp0mjxTDWIUJgSBwejSt6nnE5uXysJ5L7pCh1a7H791RRSqvnSU1Tr0WmwDGNXKQsfcJW8AS9TbZJ9UL9ENQUNN/jChCE5o74geQUZ4+B3RE7Y4BrFh0gn1dWGSyz/lWASaSVApOWC/a8A1olxHTwF5wkaNyMBriAARuAABWVPlhZg5+fQc70L2WaoJ0fbIc5/eYhYYLIcIfFQEJMS+gqhSMpke1UjYmtYR2W9eA/NR/YB6EYHbIxAYZI00+p5rpkZZkn/3yNG1Bub2hqWAROAjISADgqN/X9VDEOk9U6Is0aV1lkPleOyA+0fyR+pCBIoISDTiPTypDfrMLWYdh2ZJoKS8UrZXzuH6i0DzByJABMYQELLqjUZ6SaF2H2TpIo0JUeLQGpgxS/BuIkAEXARqf/9UY5ULfmv6TzOZERwlXqaDrsfwAiLwJgSWZfnhAuIZqQIEhBelmYsTJaLCwrUZM5rVFcBvMhGrJQJEAAhMejxhhIxa78X4FogJX4y3jUZTef2Pja6EuHWFs0nu9Hoi8FgEbjhulZPH1cfdz7K90wlkCUopusQbJ7rGAt+pE+smAgcEVkeOPDHeQhp4EBTPGOH7e8uNN7i2e5D/AOxFJ6TDic7qNo0FXqQCqyECMQTE2WfwBMjJfOhRUhT8NpsYZ8idl/GoVFCwbU2Hq++rinkOryICb0BgAomAqMKphhDkXYmr+G6gN5gmVGXBfkj/8FQ9Ogm8TTMnNIz/uc9HChkWrxNbFn8PKdB5UYvPdVbB2+6GgDjkyCthuhv4Gx/5ySMqPT7tDRFn2V0IQ+XX7cEmBTtvkaRMXIDU9ItXwKRjYVuHJCSI31K/wT6eitiuU53XuvVdSlr27g8IxA/0N2y36C+R5/U7ylyVzP9OC7Ic6tX6uf1ACAzODB4aRis0g/VrA52xfRxZAWsDv+JSjCTa0r/M2mYP13LyP+bII+AXIQhZeHjvxshWMsnL2ohSdMjfALv5lVERyMr6gDA3fVr9kNc/BAF58ZblAN65aQ1cemCvvjN/3xrIQ8y2iWlg12UXg7ByvPGSOuuPGkB0iH7yz/YM6GTCyutJj4tkvQHGnWcjkIX1qfFr+3DQaeMWKKtTjpqMkd/QK28N64mWzNI26LylU9BHxrEwnmV9t2sNwgI2iHwwBoaxMNgoJ6aN6A3i3N60MZmwMBP68r3CkMKj7flEH7xMZnHGSMPOr9mF9DMEDrx3PJdh9BgNeBrpzsCgpwyDsHa2cXDdnpM0CCsvB4tQ08/uHWFCaCC59KNp5MyUcJf2GfpvJNqDJ++5MQKFHip1OGv/lLBbHN6qb/a519KLG5ulSTQjetk12AHC2g1iS5SV2mIjOxXYeAb1NbhuyJiTYXgMS+vSraHfIxf8qj7cVhBYSQKzN62f0xzCcPhW2UrXo+eHrh8uXTAa7JaKwfQrWWDsCWkdvnjGMv1sLyY0IqycsPLxK4uw0llF1DObsA6dpaH/af5ZaUr86QoEjJ4vdebS/jbuMVvGTnksOUFQiKQ+JEmluAsR5RiYxGwQ1haNBQgL41jpxyKPfIzrJYdh1zzCyjvOVK60Tuzv0nij7K5JhxRT7t8UASP/z53DOjYbwwwVjd7Sqj8/pwPDGGPp/rulGfK/qwzDjiCOjRTQyIWszDEmyB0gLJSRfzZfkHf+57/r4Hg+hrVFgWKznOhqhJX+Bnvn9256v8serPckBAxHzx3OOt6cdLZYnYR1WsQ3W7+zyitEWbAdCAoNOicq/LZLnTzCguxGNIOykWbimxPHVr4R2aF+XJ8vPlV/S0lJz6VbTJggKsvrxDW7VPYszFnuGxC4IWHlqUHqpKV99qh/k0k+xlTCC+e3pQHqdkHCsiIaqx4QyUYcEuFZpKn35mNfNcKySErL2e5Tvbj9QAgYPaYavrY9jSA6CXT3mMcHMk+zKiCJdaC79mYMkAZS6N04ECqKEJZchzpqb4UwnyuVlNEiG8iTk+1GPIYjIvW3yuHYVbPHPOwGCasNn6ieOs0xCqlLVRikQw+D/XRxhRyQpiFixfgRtiCFA1GpMLJsAdfot3gt7pE0FGSD8vFFfVVbCKGifNy3XZ+c17q3tVa58aVukOahHNWF2w+KQGFsIfeR/Hi3YHAWNEYvm9dbOq42rFnysZz3IJAb/T1SsNZbIFAZrM39JD+u9qQ9ynWmg7/11MV7noNA7njPkZySTkcAKULuEMHjbVp6hlAD0dU2EzVDDpZxPwRyf7yfhJToUgQ6Ixv40ZTlBDJ+YQ2i5r5qHZ82AXCpEVhZEYHc6MUL+cPnQKBzHEv9aCg1HCQryMDxq8/hptSSCPyNwEBaqKTVFWlVprm1XG/LdJBOTAQ+IwIDaaGSClYebwsFaxgKQZbeGqnlRbah+mqy8DciQAQeiMDAbGFOLFixjPUx2zoawCGpHx6exXqg2ornvLzS8faWgQfCTZGJABEYRWBClFUilzPOM7oaNTjvJwJPRkCioBnRzxkElZZ52kr7J9uPshOBT4fA4IxhSipn7WP5A2cGP51nUmEiUEDgxqkhoj+mggW78TQR+JQISGrYu5DzrMgK5XKR6Kf0SCpNBBwEbkha2+tGHNH5MxEgAp8RgRuRVtfC1M9oM+pMBD41Am8mLYxZDT3686mNR+WJwGdFoPNd6yPjWeZbKz8r/tSbCBCBRgQuirYQVTEFbLQNLycCRKCAgDx6M3sWEURlvmu8IAZPEwEiQATiCMjzh3iXdy95gaSQ+uEZQy4GjUPPK4kAERhBQMgLfyrws5DQn9kAFo7xby74HQ9A42/TSVIjoPNeIkAEiAARIAJEgAgQASJABIgAESACRIAIEAEiQASIABEgAkSACBABIkAEiAARIAJEgAgQASJABIgAESACRIAIEAEiQASIABEgAkSACBABIkAEiAARIAJEgAgQASJABIgAESACRIAIEAEiQAQ+IQL/B1AvE+2M6glTAAAAAElFTkSuQmCC" />
                        </defs>
                    </svg>

                    <p className='text-balance max-w-36'>
                        Jl. Kemang Timur No. 86, Jakarta Selatan, Pejaten Bar., Ps. Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12510
                    </p>
                    <div className="grid grid-flow-col gap-4 mt-5">
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                            </svg>
                        </a>
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                            </svg>
                        </a>
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                            </svg>
                        </a>
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </a>
                    </div>
                </aside>
                <nav>
                    <h6 className="footer-title">Resource</h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">FAQs</a>
                    <a className="link link-hover">Teams</a>
                    <a className="link link-hover">Contact Us</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">Hardware</a>
                    <a className="link link-hover">Software</a>
                    <a className="link link-hover">Supplies</a>
                    <a className="link link-hover"></a>
                </nav>
            </footer>
            <p className='text-center bg-[#132229] text-white text-xs pb-5'>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </>
    )
}

export default Footer